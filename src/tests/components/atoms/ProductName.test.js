import { render } from "@testing-library/react";
import { ProductName } from "../../../components/atoms/ProductName";

describe("ProductName component", () => {
    test("persistĂȘncia do texto", () => {
        const { getByText } = render(<ProductName name="Teste" />);

        getByText("Teste");
    });
});
