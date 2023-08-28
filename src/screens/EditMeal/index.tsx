import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Loading } from "@components/Loading";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { MealStorageDTO } from "@storage/meals/MealStorageDTO";
import { mealCreate } from "@storage/meals/mealCreate";
import { mealOneById } from "@storage/meals/mealGetOneById";
import { AppError } from "@utils/AppError";
import { format } from "date-fns";
import { useCallback, useState } from "react";
import { Alert, Platform, Pressable } from "react-native";

import {
  Container,
  Container50,
  Content,
  Form,
  Label,
  OneColumnContainer,
  TwoColumnContainer,
} from "./styles";

type RouteParams = {
  mealId: string;
};

export function EditMeal() {
  const route = useRoute();
  const { mealId } = route.params as RouteParams;
  const navigation = useNavigation();
  const [gotMeal, setGotMeal] = useState<MealStorageDTO | null>(null);
  const [meal, setMeal] = useState("");
  const [description, setDescription] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [tmpDate, setTmpDate] = useState(new Date());
  const [date, setDate] = useState("");
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [tmpTime, setTmpTime] = useState(new Date());
  const [time, setTime] = useState("");
  const [isInDiet, setIsInDiet] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  async function getMealById() {
    setIsLoading(true);
    try {
      setGotMeal(await mealOneById(mealId));
      setIsInDiet(gotMeal?.isInDiet ?? false);
    } catch (error) {
      console.error(error);
      Alert.alert("Ops", "Faio o carregamento.");
    } finally {
      setIsLoading(false);
    }
  }

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const toggleTimePicker = () => {
    setShowTimePicker(!showTimePicker);
  };

  const onChangeDatePicker = ({ type }: any, selectedDate: any) => {
    if (type === "set") {
      setTmpDate(selectedDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setDate(format(selectedDate, "dd/MM/yyyy"));
      }
    } else {
      toggleDatePicker();
    }
  };

  const onChangeTimePicker = ({ type }: any, selectedTime: any) => {
    if (type === "set") {
      setTmpTime(selectedTime);

      if (Platform.OS === "android") {
        toggleTimePicker();
        setTime(format(selectedTime, "HH:mm"));
      }
    } else {
      toggleTimePicker();
    }
  };

  function handleInDiet(value: boolean) {
    setIsInDiet(value);
  }

  async function handleNewMeal() {
    try {
      if (meal.trim().length <= 2) {
        return Alert.alert("Ops", "Informe o nome da refeição.");
      }

      await mealCreate({
        date,
        meal,
        description,
        hour: time,
        isInDiet,
      });

      navigation.navigate("feedbackAddMeal", { isInDiet });
    } catch (error: any) {
      if (error instanceof AppError) {
        Alert.alert("Ops", error.message);
      } else {
        Alert.alert(
          "Ops",
          "Algo deu errado, por favor tente novamente mais tarde.",
        );
      }
    }
    console.log(meal, description, date, time, isInDiet);
  }

  useFocusEffect(
    useCallback(() => {
      getMealById();
    }, []),
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Header
        type="BASE"
        title="Editar refeição"
        backButtonAction="BACK"
        showBackButton
      />
      <Content>
        <Form>
          <OneColumnContainer>
            <Label>Nome</Label>
            <Input onChangeText={setMeal} value={gotMeal?.meal} />
          </OneColumnContainer>
          <OneColumnContainer>
            <Label>Descrição</Label>
            <Input
              onChangeText={setDescription}
              multiline
              numberOfLines={10}
              value={gotMeal?.description}
              style={{ height: 200, textAlignVertical: "top" }}
            />
          </OneColumnContainer>
          <TwoColumnContainer>
            <Container50>
              <Label>Data</Label>
              {showDatePicker && (
                <DateTimePicker
                  mode="date"
                  display="spinner"
                  value={tmpDate}
                  onChange={onChangeDatePicker}
                  minimumDate={new Date("1900-01-01")}
                />
              )}

              <Pressable onPress={toggleDatePicker}>
                <Input editable={false} value={date} />
              </Pressable>
            </Container50>
            <Container50>
              <Label>Hora</Label>
              {showTimePicker && (
                <DateTimePicker
                  mode="time"
                  is24Hour
                  display="spinner"
                  value={tmpDate}
                  onChange={onChangeTimePicker}
                />
              )}

              <Pressable onPress={toggleTimePicker}>
                <Input editable={false} value={time} />
              </Pressable>
            </Container50>
          </TwoColumnContainer>

          <Label>Está dentro da dieta?</Label>
          <TwoColumnContainer>
            <Container50>
              <Button
                color={isInDiet ? "ACTIVE_PRIMARY" : "PRIMARY"}
                title="Sim"
                width="FULL"
                onPress={() => handleInDiet(true)}
              />
            </Container50>
            <Container50>
              <Button
                color={!isInDiet ? "ACTIVE_SECONDARY" : "SECONDARY"}
                title="Não"
                width="FULL"
                onPress={() => handleInDiet(false)}
              />
            </Container50>
          </TwoColumnContainer>
        </Form>
        <Button
          color="BASE"
          title="Cadastrar refeição"
          onPress={handleNewMeal}
        />
      </Content>
    </Container>
  );
}
