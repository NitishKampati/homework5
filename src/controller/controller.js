import { ActivityModel } from "../model/activity";
const apiUrl = 'https://www.boredapi.com/api/activity/';

export const callApi = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const activity = new ActivityModel(data);
    
    return activity.serializeData();
  } catch (error) {
    console.log(error)
  }
}