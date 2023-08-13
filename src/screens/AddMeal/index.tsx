import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { mealCreate } from '@storage/meals/mealCreate';
import { AppError } from '@utils/AppError';
import { useState } from 'react';
import { Alert, Platform } from 'react-native';
import {
  Container,
  Container50,
  Content,
  Form,
  Label,
  OneColumnContainer,
  TwoColumnContainer,
} from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Pressable } from 'react-native';
import { format } from 'date-fns';

export function AddMeal() {
  const navigation = useNavigation();
  const [meal, setMeal] = useState('');
  const [description, setDescription] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [tmpDate, setTmpDate] = useState(new Date());
  const [date, setDate] = useState('');
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [tmpTime, setTmpTime] = useState(new Date());
  const [time, setTime] = useState('');
  const [isInDiet, setIsInDiet] = useState(true);

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const toggleTimePicker = () => {
    setShowTimePicker(!showTimePicker);
  };

  const onChangeDatePicker = ({ type }: any, selectedDate: any) => {
    if (type == 'set') {
      setTmpDate(selectedDate);

      if (Platform.OS === 'android') {
        toggleDatePicker();
        setDate(format(selectedDate, 'dd/MM/yyyy'));
      }
    } else {
      toggleDatePicker();
    }
  };

  const onChangeTimePicker = ({ type }: any, selectedTime: any) => {
    if (type == 'set') {
      setTmpTime(selectedTime);

      if (Platform.OS === 'android') {
        toggleTimePicker();
        setTime(format(selectedTime, 'HH:mm'));
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
        return Alert.alert('Ops', 'Informe o nome da refeição.');
      }

      await mealCreate({
        date,
        meal,
        description,
        hour: time,
        isInDiet,
      });

      navigation.navigate('feedbackAddMeal', { isInDiet });
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
    console.log(meal, description, date, time, isInDiet);
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
              {showDatePicker && (
                <DateTimePicker
                  mode="date"
                  display="spinner"
                  value={tmpDate}
                  onChange={onChangeDatePicker}
                  minimumDate={new Date('1900-01-01')}
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
                color={isInDiet ? 'ACTIVE_PRIMARY' : 'PRIMARY'}
                title="Sim"
                width="FULL"
                onPress={() => handleInDiet(true)}
              />
            </Container50>
            <Container50>
              <Button
                color={!isInDiet ? 'ACTIVE_SECONDARY' : 'SECONDARY'}
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
