const REACT_APP_RAWG_API_KEY = "f4fa1ef251544d74a78ede028163ac47";
// Base Url
const base_url = "https://api.rawg.io/api/";

//Get current date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games
const popular_games = `games?key=${REACT_APP_RAWG_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

const upcoming_games = `games?key=${REACT_APP_RAWG_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

const new_games = `games?key=${REACT_APP_RAWG_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//URL
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

//Game details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${REACT_APP_RAWG_API_KEY}`;
//Game screenshots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${REACT_APP_RAWG_API_KEY}`;
