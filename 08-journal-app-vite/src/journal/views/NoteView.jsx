import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { useForm } from '../../hooks/useForm';
import { ImageGallery } from '../components';
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useRef } from 'react';

//https://api.cloudinary.com/v1_1/dlj75ulxo/upload

export const NoteView = () => {

    const dispatch = useDispatch();

            //alias
    const {active:note, messageSaved, isSaving} = useSelector(state=>state.journal);

    const {body ,title, date, onInputChange, formState} = useForm(note);

    const fileInputRef = useRef();
    useEffect(() => {
        
        dispatch(setActiveNote(formState));

    }, [formState])
    
    useEffect(() => {
      
        if(messageSaved.length > 0){
            
            Swal.fire({
                title:'Nota actualizada',
                text: messageSaved,
                icon: 'success'
            });

        }
    
    }, [messageSaved])
    


    const dateString = useMemo(()=>{

        const newDate = new Date(date);

        return newDate.toUTCString();
    },[date]);

    const onSaveNote = () =>{
        dispatch(startSaveNote());
    }

    const onFileInputChange = ({target}) =>{
        
        if(target.files === 0) return;


        console.log('Subiendo archivos');
        dispatch(startUploadingFiles(target.files));
    }


    const onDelte = () =>{
        dispatch(startDeletingNote()); //No se le pasa ni la nota porque agarro la nota activa del state
    }

    return (
        <Grid 
            className='animate__animated animate__fadeIn animate__faster'
            container 
            direction='row' 
            justifyContent='space-between'
            sx={{mb:1}}
        >
            <Grid item>
                <Typography 
                    fontSize={39}
                    fontWeight='light'
                >
                    {dateString}

                </Typography>
            </Grid>

            <Grid item>

                <input
                    type='file'
                    multiple
                    ref = {fileInputRef}
                    onChange={onFileInputChange}
                    style={{ display:'none'}}
                />

                <IconButton
                    color='primary'
                    disabled={isSaving}
                    onClick={ () => fileInputRef.current.click() }
                >
                    <UploadOutlined/>
                </IconButton>


                <Button 
                    disabled={isSaving}
                    onClick={onSaveNote}
                    color='primary' 
                    sx={{padding:2}}
                >
                    <SaveOutlined sx={{fontSize:30, mr:1}}/>
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    placeholder='Ingrese un título'
                    label='Título'
                    name='title'
                    value={title}
                    onChange={onInputChange}
                    sx={{border:'none',mb:1}}

                />

                <TextField
                    type='text'
                    variant='filled'
                    fullWidth
                    multiline
                    placeholder='¿Qué sucedió hoy?'
                    minRows={5}
                    name='body'
                    value={body}
                    onChange={onInputChange}

                />
            </Grid>

            <Grid 
                container
                justifyContent='end'
            >
                <Button
                    onClick={onDelte}
                    sx={{mt:2}}
                    color='error'
                >
                    <DeleteOutline/>
                    Borrar
                </Button>

            </Grid>

            <ImageGallery
                images={note.imageUrls}
            />

        </Grid>
    )
}
