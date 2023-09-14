import { performAddOperatorSelectList } from "./modules/Operand_List_Management/performAddOperatorSelectListDom.js";
import { writeCalculation } from "./modules/Arithmetic_Operations/writeCalculationResultOnElement.js";
import "./styles/general.css";


function main() {
    const calculateForm = document.querySelector("#calculateForm");
    const calculateBtn = document.querySelector('.calculateBtn');
    
    calculateForm.addEventListener("submit",(e) => {
        e.preventDefault();
        performAddOperatorSelectList();
    })
    calculateBtn.addEventListener("click",(e) => {
        writeCalculation();
    })

}
//main 
main();
