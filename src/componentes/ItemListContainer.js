import { Component } from "react";
import Common from "./Common";


class ItemListContainer extends Component{

    render(){
        return(
            <>
            <Common.TitleLabel text="Objetos"></Common.TitleLabel>
            <Common.ButtonSubmit></Common.ButtonSubmit>
            </>
        )
    }

}

export default ItemListContainer