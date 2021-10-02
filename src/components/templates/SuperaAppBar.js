import { useProducts } from "../../hooks/useProducts";

import { AppBar, Box, Toolbar } from "@mui/material";

import { useDrawerResponsive } from "../../hooks/useDrawerResponsive";
import { useCart } from "../../hooks/useCart";
import { BadgeCart } from "../organism/BadgeCart";
import { SearchProduct } from "../organism/SearchProduct";
import { LogoButton } from "../organism/LogoButton";
import { MenuFilterMobile } from "../organism/MenuFilterMobile";
import { BoxGrow } from "../atoms/BoxGrow";

export function SuperaAppBar() {
    const { handleDrawerToggle } = useDrawerResponsive();
    const { searchProduct } = useProducts();
    const { cart } = useCart();

    function handleSearchProduct(productName) {
        searchProduct(productName);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <MenuFilterMobile
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                    />

                    <LogoButton />

                    <BoxGrow />

                    <SearchProduct
                        placeholder="Procurar ..."
                        onChange={(ev) => handleSearchProduct(ev.target.value)}
                    />

                    <BoxGrow />

                    <BadgeCart
                        badgeContent={cart.length}
                        color="info"
                        sx={{ marginTop: 3 }}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
