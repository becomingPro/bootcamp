import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {
  CustomBtn,
  CustomBtnLoading,
  CustomColor,
  CustomInput,
  CustomHeader,
  CustomQuestion,
} from '../../../src/components/Reusable';
import Routes from '../../../App';
import {validateEmail} from '../../Utils/Validasi';
const EditProfile = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [jobs, setJobs] = useState('');
  const [slogan, setSlogan] = useState('');
  const [active, setActive] = useState(false);
  const [blur, setBlur] = useState(true);

  const onSave = () => {
    let fData = {
      firstName: firstName,
      lastName: lastName,
      slogan: slogan,
      jobs: jobs,
    };
    if ((firstName, lastName, email, jobs, slogan == '')) {
      alert('Plase Fill All Empty Data');
    } else if (!validateEmail(email)) {
      alert('Invalid Email', 'You entered invalid email');
    } else {
      AsyncStorage.mergeItem('fDataLogin', JSON.stringify(fData));
      alert('Data Saved');
      navigation.navigate('Profile');
    }
  };
  return (
    <View style={styles.container}>
      {blur ? (
        <CustomHeader
          title="Eidt Profile"
          onPress={() => navigation.navigate('Profile')}
          navigationTitle="Profile"
        />
      ) : (
        <View />
      )}
      <View>
        <CustomInput
          onChangeText={(value) => setFirstName(value)}
          value={firstName}
          onFocus={() => setBlur(false)}
          onBlur={() => setBlur(true)}
          placeholder="First Name"
        />
        <CustomInput
          onChangeText={(value) => setLastName(value)}
          value={lastName}
          onFocus={() => setBlur(false)}
          onBlur={() => setBlur(true)}
          placeholder="Last Name"
        />
        <CustomInput
          onChangeText={(value) => setEmail(value)}
          value={email}
          onFocus={() => setBlur(false)}
          onBlur={() => setBlur(true)}
          placeholder="Email"
        />
        <CustomInput
          onChangeText={(value) => setJobs(value)}
          value={jobs}
          onFocus={() => setBlur(false)}
          onBlur={() => setBlur(true)}
          placeholder="Jobs"
        />
        <CustomInput
          onChangeText={(value) => setSlogan(value)}
          value={slogan}
          onFocus={() => setBlur(false)}
          onBlur={() => setBlur(true)}
          placeholder="Slogan"
        />
      </View>
      <View>
        {active ? (
          <CustomBtnLoading />
        ) : (
          <CustomBtn title="Update Data" onPress={() => onSave()} />
        )}
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: CustomColor.white,
  },
});
