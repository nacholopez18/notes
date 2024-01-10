import api from "./rule_API";

export const allNotes = async () => {
  let url = "/notes";
  try {
    const result = await api.get(url);
    // console.log(result);
    return result.data;
  } catch (error) {
    throw error.response.data.error;
  }
};
export const getNote = async (id) => {
  try {
    let url = `/notes/${id}`;
    const result = await api.get(url);
    // console.log(result);
    return result.data.note;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const newNote = async (newNoteData) => {
  let url = "/notes";
  try {
    const result = await api.post(url, newNoteData);
    // console.log(result);
    return result.data;
  } catch (error) {
    throw error.response.data.error;
  }
};
export const deleteNote = async (id) => {
  let url = `/notes/${id}`;
  try {
    const result = await api.delete(url);
    // console.log(result);
    return result.data;
  } catch (error) {
    throw error.response.data.error;
  }
};
export const modifyNote = async (id, newData) => {
  let url = `/notes/${id}`;
  try {
    const result = await api.patch(url, newData);
    // console.log(result);
    return result.data;
  } catch (error) {
    throw error.response.data.error;
  }
};
export const toggleArchiveNote = async (id) => {
  const url = `/notes/${id}/archive`;
  try {
    const result = await api.post(url);
    return result.data;
  } catch (error) {
    throw error.response.data.error;
  }
};
