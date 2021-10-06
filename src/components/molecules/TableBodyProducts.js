import {
    Avatar,
    TableBody,
    TableCell,
    TableRow,
    Typography,
} from "@mui/material";
import { AvatarProduct } from "../atoms/AvatarProduct";
import { Money } from "../atoms/Money";
import { MoneyFormatted } from "../atoms/MoneyFormatted";

export const TableBodyProducts = (props) => {
    return (
        <>
            <TableBody>
                {props.products.map((product) => (
                    <TableRow key={product.id}>
                        <TableCell>
                            <AvatarProduct
                                size={props.size}
                                product={product}
                            />
                        </TableCell>
                        <TableCell>
                            <Typography variant="body2" gutterBottom>
                                {product.name}
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="button" gutterBottom>
                                {product.quantity}
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <MoneyFormatted
                                price={parseFloat(
                                    product.price * product.quantity
                                )}
                            />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </>
    );
};
