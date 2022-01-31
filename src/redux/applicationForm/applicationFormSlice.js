import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const submitApplicationAsync = createAsyncThunk(
  'applicationForm/submitApplication',
  async (data) => {
    const res = await axios.post('https://61c458fef1af4a0017d994c8.mockapi.io/Application', data);
    return res.data;
  }
);

export const getApplicationAsync = createAsyncThunk('applicationForm/getApplication', async () => {
  const res = await fetch('https://61c458fef1af4a0017d994c8.mockapi.io/Application');
  return await res.json();
  // console.log(data);
});

export const counterSlice = createSlice({
  // CounterSlice'ı store'da kullanacağız.
  name: 'applicationForm', // state'e ulaşmak istediğimiz zaman state.applicationForm şeklinde ulaşmamızı sağlayan ifade.
  initialState: {
    // state'in ilk oluşturulurkenki değerlerini belirlememizi sağlar.

    name: '',
    lastName: '',
    age: '',
    identificationNumber: '',
    reasonForApplication: '',
    address: '',
    attachments: '',
    applicationNumber: '',
    values: '',
    id: '1'
  },
  reducers: {
    // Buraya state'i yani veriyi güncelleyecek olan tanımları yazıyoruz.
    // state'in içinde son değer neyse o olacak, ilk etapta initialState değerleri boş olduğundan hepsi boş gelir.
    // Kullanıcının bilgilerini almak istediğimizde action altındaki payload'u kullanıyoruz.
    submitApplication: (state, action) => {
      state.name = action.payload.name;
      state.lastName = action.payload.lastName;
      state.age = action.payload.age;
      state.identificationNumber = action.payload.identificationNumber;
      state.reasonForApplication = action.payload.reasonForApplication;
      state.address = action.payload.address;
      state.attachments = action.payload.attachments;
      state.applicationCode = Math.floor(Math.random() * 90000) + 10000;
    },
    extraReducers: {
      //addForm
      //işlem başarılı bir şekilde tamamlandığında
      [submitApplicationAsync.fulfilled]: (state, action) => {
        state.name = action.payload.name;
        state.lastName = action.payload.lastName;
        state.age = action.payload.age;
        state.identificationNumber = action.payload.identificationNumber;
        state.reasonForApplication = action.payload.reasonForApplication;
        state.address = action.payload.address;
        state.attachments = action.payload.attachments;
        state.randomNumber = Math.floor(Math.random() * 90000) + 10000;
        console.log('Oğuzhan');
      },
      // getForm
      [getApplicationAsync.fulfilled]: (state, action) => {
        state.applicationForm = action.payload;
      }
    }
  }
});

export const { submitApplication } = counterSlice.actions; // Yukarda oluşturduğumuz actionları ilgili componentlerde dispatch edilmek üzere dışa aktarıyoruz.
export default counterSlice.reducer; // Aksiyonların store'a kaydedilebilmesi için dışarı aktardık.
