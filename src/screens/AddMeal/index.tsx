import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import { mealCreate } from "@storage/meals/mealCreate";
import { AppError } from "@utils/AppError";
import { format } from "date-fns";
import { useState } from "react";
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

export function AddMeal() {
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
      if (
        meal.trim().length <= 2 ||
        description.trim().length <= 2 ||
        !date ||
        !time
      ) {
        return Alert.alert(
          "Nova refeição",
          "Preencha todos os dados da refeição.",
        );
      }

      await mealCreate({
        date: new Date(`${format(new Date(tmpDate), "yyyy-MM-dd")} ${time}`),
        meal,
        description,
        isInDiet,
      });

      navigation.navigate("feedbackAddMeal", { isInDiet });
    } catch (error: any) {
      if (error instanceof AppError) {
        Alert.alert("Ops", error.message);
      } else {
        Alert.alert(
          "Nova refeição",
          "Algo deu errado, por favor tente novamente mais tarde.",
        );
      }
    }
  }

  return (
    <Container>
      <Header type="BASE" title="Nova refeição" showBackButton />
      <Content showsVerticalScrollIndicator={false}>
        <Form>
          <OneColumnContainer>
            <Label>Nome</Label>
            <Input onChangeText={setMeal} returnKeyType="next" />
          </OneColumnContainer>
          <OneColumnContainer>
            <Label>Descrição</Label>
            <Input
              onChangeText={setDescription}
              multiline
              numberOfLines={10}
              style={{ height: 200, textAlignVertical: "top" }}
              returnKeyType="next"
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
                <Input editable={false} value={date} returnKeyType="next" />
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
                <Input editable={false} value={time} returnKeyType="next" />
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
          style={{ marginBottom: 60 }}
        />
      </Content>
    </Container>
  );
}
