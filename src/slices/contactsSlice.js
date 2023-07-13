import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useApiUrls } from 'api/useApiUrls';

export const fetchContacts = createAsyncThunk('contacts/fetch', async () => {
  const { contacts } = useApiUrls();
  const response = await axios.get(contacts);
  return response.data;
});

export const postContact = createAsyncThunk('contacts/post', async contact => {
  const { contacts } = useApiUrls();
  const response = await axios.post(contacts, contact);
  return response.data;
});

export const removeContact = createAsyncThunk('contacts/remove', async id => {
  const { contacts } = useApiUrls();
  const response = await axios.delete(contacts + `/${id}`);
  return response.data;
});

const slice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: null,
    filter: '',
  },
  reducers: {
    updateFilter: (state, action) => {
      const { query } = action.payload;
      state.filter = query;
    },
    clearContacts: (state, action) => {
      state.contacts = null;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(postContact.fulfilled, (state, action) => {
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        const { id } = action.payload;
        const contactsToDelete = [...state.contacts];
        const contactIndex = contactsToDelete.findIndex(item => item.id === id);
        contactsToDelete.splice(contactIndex, 1);
        state.contacts = contactsToDelete;
      });
  },
});

export const { updateFilter, clearContacts } = slice.actions;
export default slice.reducer;
