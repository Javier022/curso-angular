import { Component } from "@angular/core";
import { IProduct } from "./product.module";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent {
  user = {
    name: "",
    email: "",
    password: "",
  };
  widthImg = 10;
  box = {
    width: 100,
    height: 100,
    background: "red",
  };
  name = "test";
  age = 18;
  image = "https://miro.medium.com/max/480/1*VKY-Ldkt-iHobItql7G_5w.png";
  btnDisabled = true;
  person = {
    name: "tes",
    age: 20,
    avatar: "https://miro.medium.com/max/480/1*VKY-Ldkt-iHobItql7G_5w.png",
  };
  showText = false;
  products: IProduct[] = [
    {
      id: 1,
      name: "product 1",
      img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE55U7F",
    },
    {
      id: 2,
      name: "product 2",
      img: "https://cdn.shopify.com/s/files/1/0101/2522/products/LD0005959734_d11abfc9-3919-4245-a1dc-cc283615c6d3_1600x.jpg?v=1657154270",
    },

    {
      id: 3,
      name: "product 4",
      img: "https://walmartgt.vtexassets.com/arquivos/ids/207066/Teclado-Y-Mouse-Durabrand-3-23487.jpg?v=637696505480930000",
    },
    {
      id: 4,
      name: "product 5",
      img: "https://www.alephksa.com/wp-content/uploads/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a_EN-1-scaled.jpg",
    },
    {
      id: 5,
      name: "product 6",
      img: "https://images-na.ssl-images-amazon.com/images/I/41zEY42v1tL._SX600_.jpg",
    },
    {
      id: 6,
      name: "product 7",
      img: "https://istore.gt/wp-content/uploads/2022/08/7EC00111.jpg",
    },
  ];

  toogleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age = this.person.age + 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  loginUser() {
    console.log(this.user);
  }
}
