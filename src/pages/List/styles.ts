import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { IPatient } from './index';

export const Container = styled.View`
    flex: 1;
`;

export const Header =  styled.View`
    padding: 20px;
    background: #F3F3F3;

    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Text`
    color: #3E69DC;
    font-size: 24px;
    font-family: 'Poppins-Bold';
    line-height: 30px;
`;

export const PatientsList = styled(FlatList as new () => FlatList<IPatient>)`
    padding: 32px 24px 16px;
`;

export const PatientContainer = styled.View`
    background: #F3F3F3;
    border: 2px solid #3E69DC;
    border-radius: 10px;
    padding: 20px 16px 12px;
    margin-bottom: 16px;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #2C313F;
    font-size: 16px;
    font-family: 'Poppins-Bold';
`;

export const InfoContainer = styled.View`
    flex: 1;
    background: #F3F3F3;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const Info = styled.Text`
    color: #2C313F;
    font-size: 12px;
    font-family: 'Poppins-Medium';
`;