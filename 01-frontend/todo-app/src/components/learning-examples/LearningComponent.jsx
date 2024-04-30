import FirstComponent from "./FirstComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import { FifthComponent } from "./FirstComponent";
import LearningJavaScript from "./LearningJavaScript";


export default function LearningComponent() {
    return (
        <div className="LearningComponent">
            <h1>Learning Component</h1>
            <FirstComponent></FirstComponent>
            <ThirdComponent></ThirdComponent>
            <FourthComponent></FourthComponent>
            <FifthComponent></FifthComponent>
            <LearningJavaScript></LearningJavaScript>
        </div>
    )
}