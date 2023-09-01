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
import { mealOneById } from "@storage/meals/mealGetOneById";
import { mealUpdate } from "@storage/meals/mealUpdate";
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
      const gotMeal = await mealOneById(mealId);

      setMeal(gotMeal?.meal!);
      setDescription(gotMeal?.description!);
      setDate(format(new Date(gotMeal?.date!), "dd/MM/yyyy"));
      setTime(format(new Date(gotMeal?.date!), "HH:mm"));
      setIsInDiet(gotMeal?.isInDiet ?? false);

      setTmpDate(new Date(gotMeal?.date!));
      setTmpTime(new Date(gotMeal?.date!));
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

  async function handleUpdateMeal() {
    try {
      if (
        meal.trim().length <= 2 ||
        description.trim().length <= 2 ||
        !date ||
        !time
      ) {
        return Alert.alert(
          "Editar refeição",
          "Preencha todos os dados da refeição.",
        );
      }

      await mealUpdate({
        id: mealId,
        date: new Date(`${format(new Date(tmpDate), "yyyy-MM-dd")} ${time}`),
        meal,
        description,
        isInDiet,
      });

      navigation.navigate("feedbackAddMeal", { isInDiet });
    } catch (error: any) {
      if (error instanceof AppError) {
        Alert.alert("Editar refeição", error.message);
      } else {
        Alert.alert(
          "Editar refeição",
          "Algo deu errado, por favor tente novamente mais tarde.",
        );
      }
    }
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
      <Content showsVerticalScrollIndicator={false}>
        <Form>
          <OneColumnContainer>
            <Label>Nome</Label>
            <Input onChangeText={setMeal} value={meal} />
          </OneColumnContainer>
          <OneColumnContainer>
            <Label>Descrição</Label>
            <Input
              onChangeText={setDescription}
              multiline
              numberOfLines={10}
              value={description}
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
                  value={tmpTime}
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
          title="Salvar alterações"
          onPress={() => handleUpdateMeal()}
          style={{ marginBottom: 60 }}
        />
      </Content>
    </Container>
  );
}
