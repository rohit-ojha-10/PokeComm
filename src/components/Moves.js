import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

export default function Moves({ details }) {
    const colors = {
        fire: '#F77E21',
        water: '#43919B',
        grass: '#019267',
        normal: '#D8D9CF',
        psychic: 'pink',
        fairy: 'pink',
        poison: '#C689C6',
        bug: '#749F82',
        ground: '#9F8772',
        electric: '#FFC23C',
        ice: 'skyblue',
        fighting: 'grey',
        flying: 'purple',
        rock: 'brown',
        ghost: '#726A95',
        dark: '#2C3333',
        dragon: '#DD5353',
        steel: 'silver'

    }
    const Item = styled(Paper)(({ theme, color,color2 }) => ({
        backgroundColor: color,
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: color2,
        fontSize : '1.21345rem'
    }));
    let color = colors[details.types[0].type.name],color2='black'
    let types = details.types[0].type.name
    if(types === 'dark' || types === 'grass' || types === 'water'  ){
      color2 = '#EAEAEA'
      }
      if( types === 'rock'){
      color2 = '#EAEAEA'
      }
    const a = [8 , 4, 4, 8];
    let i = 1;
    details.moves = details.moves.slice(0,12)
    return (
        <div className='moves' style={{ textAlign: "center" }}>
        
            <Box  sx={{ flexGrow: 1,width : '70%' ,height : '50%'}}>
                <Grid container spacing={2} style = {{width : "100%"}}>
                    {details.moves.map((it, id) => {
                        i = (i + 1) % 4;
                        return <Grid item xs={6} md={a[i]}>
                            <Item color2 = {color2} color={color}>{it.move.name}</Item>
                        </Grid>
                        }
                )
                }
                </Grid>
            </Box>
        </div>
    )
}
