import { render } from "@testing-library/react";
import { Money } from "../../../components/atoms/Money";

describe("Money component", () => {
    test("persistĂȘncia do texto", () => {
        const { getByText } = render(<Money>1000</Money>);

        getByText("1000");
    });
});
