import AsyncStorage from "@react-native-async-storage/async-storage";

export const getStorageValue = async (key)  => {
    let value = '';
    try {
        value = await AsyncStorage.getItem(key);
    } catch (e) {
        console.log(e)
    }
    return JSON.parse(value);
}

export const storeValue = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.log(e);
    }
}
