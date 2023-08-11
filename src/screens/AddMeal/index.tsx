import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { useState } from 'react';
import {
  Container,
  Container50,
  Content,
  Form,
  Label,
  OneColumnContainer,
  TwoColumnContainer,
} from './styles';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { mealCreate } from '@storage/meals/mealCreate';
import { MealStorageDTO } from '@storage/meals/MealStorageDTO';
import { AppError } from '@utils/AppError';

export function AddMeal() {
  const navigation = useNavigation();
  const [meal, setMeal] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [isInDiet, setIsInDiet] = useState(true);

  async function handleNewMeal() {
    try {
      if (meal.trim().length <= 2) {
        return Alert.alert('Ops', 'Informe o nome da refeição.');
      }

      await mealCreate({
        date: '01/01/2023',
        meal,
        description,
        hour,
        isInDiet,
      });

      // navigation.navigate('players', { group });
      Alert.alert('Sucesso!', 'Refeição criada com sucesso!');
    } catch (error: any) {
      if (error instanceof AppError) {
        Alert.alert('Ops', error.message);
      } else {
        Alert.alert(
          'Ops',
          'Algo deu errado, por favor tente novamente mais tarde.',
        );
      }
    }
    console.log(meal, description, date, hour, isInDiet);
  }

  return (
    <Container>
      <Header type="SECONDARY" title="Nova refeição" showBackButton />
      <Content>
        <Form>
          <OneColumnContainer>
            <Label>Nome</Label>
            <Input onChangeText={setMeal} />
          </OneColumnContainer>
          <OneColumnContainer>
            <Label>Descrição</Label>
            <Input
              onChangeText={setDescription}
              multiline={true}
              numberOfLines={10}
              style={{ height: 200, textAlignVertical: 'top' }}
            />
          </OneColumnContainer>
          <TwoColumnContainer>
            <Container50>
              <Label>Data</Label>
              <Input onChangeText={setDate} />
            </Container50>
            <Container50>
              <Label>Hora</Label>
              <Input onChangeText={setHour} />
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
