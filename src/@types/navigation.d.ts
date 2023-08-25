export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      addMeal: undefined;
      editMeal: {
        mealId: string;
      };
      getMeal: undefined;
      feedbackAddMeal: {
        isInDiet: boolean;
      };
      statistics: undefined;
      mealDetails: {
        mealId: string;
      };
    }
  }
}
