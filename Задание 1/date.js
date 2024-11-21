export const getCurrentDateTime = () => {
    return new Date().toISOString();
  };
  
  export const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  
  export const getCurrentMonth = () => {
    return new Date().getMonth() + 1;
  };
  
  export const getCurrentDay = () => {
    return new Date().getDate();
  };
  
  export function addOrSubtractTime(operation, { day = 0, month = 0 }) {
    const currentDate = new Date();
    if (operation === "add") {
      currentDate.setDate(currentDate.getDate() + day);
      currentDate.setMonth(currentDate.getMonth() + month);
    } else if (operation === "subtract") {
      currentDate.setDate(currentDate.getDate() - day);
      currentDate.setMonth(currentDate.getMonth() - month);
    } else {
      return "Invalid operation";
    }
    return currentDate.toISOString();
  }