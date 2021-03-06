import { render } from "@testing-library/react";
import { WriteDrawer } from "../../../components/molecules/WriteDrawer";

const product = [
    {
        id: 312,
        image: "super-mario-odyssey.png",
        name: "Super Mario Odyssey",
        quantity: 0,
        price: 197.88,
    },
];

describe("WriteDrawer component", () => {
    test("persistĂȘncia do retorno do component", () => {
        const { container, getByText } = render(<WriteDrawer />);
        container.getElementsByClassName("MuiToolbar-root");
        container.getElementsByClassName("MuiList-root");
        container.getElementsByClassName("MuiTableCell-root");

        getByText("Filtrar por");
    });
});
