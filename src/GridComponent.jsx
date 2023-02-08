import { Container, Grid, Paper, Card } from "@mui/material"
import Cart from "./Cart"

export default function GridComponent() {
    return(
        <Container>
            <Grid container>
                <Grid item lg={4} sm={6} xs={12}>
                    
                </Grid>
                <Grid item lg={4} sm={6} xs={12}>
                    <Card className="card-container">
                        <Cart />
                    </Card>
                </Grid>
                <Grid item lg={4} sm={6} xs={12}>
                    
                </Grid>
            </Grid>
        </Container>
    )
}