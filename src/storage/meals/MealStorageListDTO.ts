export type MealsStorageListDTO = {
  date: string;
  data: {
    id?: string;
    meal: string;
    description: string;
    isInDiet: boolean;
    date: string;
    hour: string;
  }[]
}[];