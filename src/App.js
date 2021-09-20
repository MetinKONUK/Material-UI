import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardAction,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  CardActions
} from "@material-ui/core";
import {PhotoCamera} from "@material-ui/icons";
import useStyles from "./styles";
const App = () => {
    const classes = useStyles();
    const imageUrl = "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    return (
      <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera className={classes.icon}/>
            <Typography variant="h6">
              Photo Album
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.container}>
            <Container maxWidth="sm">
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                Photo Album
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Hello Everyone This is a photo album and I'm trying to make this sentence as long as possible so we can see how does it look like on the screen
              </Typography>
              <div className={classes.buttons}>
                <Grid container spacing="2" justify="center">
                    <Grid item>
                      <Button variant="contained" color="primary">
                        See my photos
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">
                        Secondary action
                      </Button>
                    </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing="2">
              <Grid item xs={12} sm={6}>
                <Card className={classes.card}>
                  <CardMedia 
                  className={classes.cardMedia}
                  image={imageUrl}
                  title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography paragraph>
                      This is media card. You can use this section to describe content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Card className={classes.card}>
                  <CardMedia 
                  className={classes.cardMedia}
                  image={imageUrl}
                  title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography paragraph>
                      This is media card. You can use this section to describe content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </main>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary">
            Something here to give footer the purpose!
          </Typography>
        </footer>
      </>
    );
  }
export default App;
