import { render } from "@testing-library/react";
import { FullInputFormik } from "../../../components/molecules/FullIInputFormik";

describe("FullInputFormik component", () => {
    test("persistĂȘncia do retorno do component", () => {
        const { container } = render(<FullInputFormik />);

        container.getElementsByClassName("MuiGrid-root");
        container.getElementsByClassName("MuiInput-root");
        container.getElementsByClassName("MuiInputLabel-root");
    });
});
