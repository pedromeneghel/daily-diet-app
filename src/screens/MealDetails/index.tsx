import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Loading } from "@components/Loading";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { MealStorageDTO } from "@storage/meals/MealStorageDTO";
import { mealOneById } from "@storage/meals/mealGetOneById";
import { mealRemoveById } from "@storage/meals/mealRemoveById";
import { format } from "date-fns";
import { useCallback, useState } from "react";
import { Alert } from "react-native";

import {
  ButtonsArea,
  Container,
  Content,
  Cover,
  DateLabel,
  DateTime,
  Description,
  DietStatusContainer,
  DietStatusIcon,
  DietStatusText,
  Meal,
  MealDetailsArea,
  RemoveModal,
  RemoveModalButtonGroup,
  RemoveModalContainer,
  RemoveModalContent,
  RemoveModalTitle,
} from "./styles";

type RouteParams = {
  mealId: string;
};

export function MealDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const { mealId } = route.params as RouteParams;
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [meal, setMeal] = useState<MealStorageDTO | null>(null);

  async function getMealById() {
    setIsLoading(true);
    try {
      setMeal(await mealOneById(mealId));
    } catch (error) {
      console.error(error);
      Alert.alert(
        "Ops",
        "Não conseguimos obter os dados da refeição, por favor tente novamente.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function mealRemove(mealId: string) {
    try {
      await mealRemoveById(mealId);
      navigation.navigate("home");
    } catch (error) {
      console.error(error);
      Alert.alert("Excluir refeição", "Não foi possível excluir a refeição.");
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

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <Container>
      <Header
        type={meal?.isInDiet ? "GOOD" : "BAD"}
        title="Refeição"
        showBackButton
      />
      {meal && (
        <Content>
          <MealDetailsArea>
            <Meal>{meal.meal}</Meal>
            <Description>{meal.description}</Description>
            <DateLabel>Data e hora</DateLabel>
            <DateTime>
              {`${format(new Date(meal.date), "dd/MM/yyyy")} às ${format(
                new Date(meal.date),
                "HH:mm",
              )} `}
            </DateTime>
            <DietStatusContainer>
              <DietStatusIcon isDiet={meal.isInDiet} />
              <DietStatusText>
                {meal.isInDiet ? "dentro da dieta" : "fora da dieta"}
              </DietStatusText>
            </DietStatusContainer>
          </MealDetailsArea>
          <ButtonsArea>
            <Button
              icon="Pencil"
              color="BASE"
              title="Editar refeição"
              onPress={() => navigation.navigate("editMeal", { mealId })}
            />
            <Button
              icon="Trash"
              color="INVERSE_BASE"
              title="Excluir refeição"
              onPress={() => toggleModal()}
            />
          </ButtonsArea>
        </Content>
      )}
      {modalVisible && <Cover />}
      <RemoveModal
        visible={modalVisible}
        animationType="fade"
        transparent
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <RemoveModalContainer>
          <RemoveModalContent>
            <RemoveModalTitle>
              Deseja realmente excluir o registro da refeição?
            </RemoveModalTitle>
            <RemoveModalButtonGroup>
              <Button
                color="INVERSE_BASE"
                title="Cancelar"
                width="LIMITED"
                onPress={() => toggleModal()}
              />
              <Button
                color="BASE"
                title="Sim, excluir"
                width="LIMITED"
                onPress={() => mealRemove(meal!.id!)}
              />
            </RemoveModalButtonGroup>
          </RemoveModalContent>
        </RemoveModalContainer>
      </RemoveModal>
    </Container>
  );
}
