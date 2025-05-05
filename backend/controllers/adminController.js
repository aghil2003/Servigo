import WeeklyData from "../model/weeklyData.js";
import MonthlyData from "../model/MonthlyData.js";
import YearlyData from "../model/yearlyData.js";


export const weeklyDataForGraph = async (req, res) => {
    try {
      const weeklyData= await WeeklyData.find();
      console.log( weeklyData)
      res.status(200).json(weeklyData);
      console()
      
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error });
    }
  };



  export const  monthDataForGraph = async (req, res) => {
    try {
      const monthlyData= await MonthlyData.find()
      res.status(200).json(monthlyData);
      console()
      
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error });
    }
  };


  export const  yearDataForGraph = async (req, res) => {
    try {
      const yearlyData= await YearlyData.find()
      res.status(200).json(yearlyData);
      console()
      
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error });
    }
  };
  


 