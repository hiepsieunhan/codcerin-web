import { tips, tipNames} from './tip';

let routeMap = {
  "home": "Trang chủ",
  "product": "Sản phẩm",
  "contact": "liên hệ",
  "tips": "tư vấn",
  "codcerin-d": "CODCERIN D", 
  "codcerin-e": "CODCERIN E",
  "codcerin-exp": "CODCERIN EXP",
  "codcerin-thao-duoc": "CODCERIN Thảo Dược"
};

tipNames.forEach(tipName => (routeMap[tipName] = tips[tipName].title));

export { routeMap }

export const menuTabs = ["home", "product", "tips", "contact"];

export const sliderImages = ['test.jpg', 'test2.jpg', 'test3.jpg', 'test4.jpg']
