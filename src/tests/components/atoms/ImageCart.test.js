import { render } from "@testing-library/react";
import { ImageCart } from "../../../components/atoms/ImageCart";

describe("ImageCart component", () => {
    test("persistĂȘncia do retorno do component", () => {
        const { getByRole } = render(<ImageCart />);

        getByRole("img");
    });
});
