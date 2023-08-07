import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

export const fetchAsyncMovies = createAsyncThunk('movies', async (term) => {
    const response = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=81330e4&s=${term}&type=movie`)
    try {
        return response.data
    } catch (error) {
        return error
    }
})

export const fetchAsyncShows = createAsyncThunk('shows', async (term) => {
    const response = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=81330e4&s=${term}&type=series`)
    try {
        return response.data
    } catch (error) {

        return error
    }
})

export const fetchAsyncMovieShowDetails = createAsyncThunk('showsMovies', async (id) => {
    const response = await axios.get(`https://www.omdbapi.com/?&apikey=81330e4&i=${id}&plot=full`)
    try {
        return response.data
    } catch (error) {

        return error
    }
})

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        shows: [],
        ShowsMovieDetails: [],
    },
    reducers: {
        removeSelectedMoviesorShow: (state) => {
            state.ShowsMovieDetails = []
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchAsyncMovies.pending, (state) => {
            console.log('Pending')
        })
        builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
            state.movies = action.payload
        })
        builder.addCase(fetchAsyncMovies.rejected, (state) => {
            console.log('Rejected');
        })
        builder.addCase(fetchAsyncShows.pending, (state) => {
            console.log('Pending')
        })
        builder.addCase(fetchAsyncShows.fulfilled, (state, action) => {
            state.shows = action.payload
        })
        builder.addCase(fetchAsyncShows.rejected, (state) => {
            console.log('Rejected');
        })
        builder.addCase(fetchAsyncMovieShowDetails.pending, (state, action) => {
            console.log('Pending')
        })
        builder.addCase(fetchAsyncMovieShowDetails.fulfilled, (state, action) => {
            state.ShowsMovieDetails = action.payload
        })
        builder.addCase(fetchAsyncMovieShowDetails.rejected, (state) => {
            console.log('Rejected');
        })


    }

})
export const { removeSelectedMoviesorShow } = movieSlice.actions
export default movieSlice.reducer