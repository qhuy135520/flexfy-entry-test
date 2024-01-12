import "./App.css";
import Banner from "./components/banner/Banner";
import ProductList from "./components/product/ProductList";
import Navigator from "./components/navbar/Navigator";
import AboutUs from "./components/footer/AboutUs";
import { Footer } from "./components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import HomeCommunity from "./components/community/HomeCommunity";
import HomeJoining from "./components/home-joining/HomeJoining";
import HomeAdvertising from "./components/advertising/HomeAdvertising";
import itemsBestSeller from "./assets/shared/ItemBestSeller";
import itemSale from "./assets/shared/itemSale";
import ProductTopList from "./components/product-top/ProductTopList";
import itemTopCategories from "./assets/shared/itemTopCategories";

function App() {
  return (
    <div className="App">
      <Navigator />
      <Banner />
      <ProductList
        heading="Best Sellers"
        linkTitle="Shop now"
        items={itemsBestSeller}
      />
      <ProductList
        heading="Up to 30% Off"
        linkTitle="Shop Bras"
        items={itemSale}
      />
      <ProductTopList heading="15% Off Categories" items={itemTopCategories}/>
      <HomeAdvertising />

      <HomeJoining />
      <HomeCommunity />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
