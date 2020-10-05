import React, { useState, useEffect, useCallback } from 'react';

import api from '../../services/api';

import { formatDate } from '../../utils/formatter';

import { 
    Container, 
    Header, 
    Logo, 
    PatientsList, 
    PatientContainer,
    Title,
    InfoContainer,
    Info,
} from './styles';

export interface IPatient {
    code: number;
    name: string;
    age: number;
    register: Date;
    city: string;
    state: string;
}

const List: React.FC = () => {
    const [patients, setPatients] = useState<IPatient[]>([]);
    const [refresh, setRefresh] = useState(false);
    
    useEffect(() => {
        async function getPatients() {
            try{
                const response = await api.get('/patients');

                setPatients(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getPatients();
    }, []);

    const handleRefresh = useCallback(async () => {
        setRefresh(true);

        try{
            const response = await api.get('/patients');

            setPatients(response.data);
        } catch (error) {
            console.log(error);
        }

        setRefresh(false);
    }, []);

    return (
        <Container>
            <Header>
                <Logo>ODAPP®</Logo>
            </Header>
            <PatientsList
                contentContainerStyle={{ paddingBottom: 100 }}
                data={patients}
                keyExtractor={patient => patient.name}
                refreshing={refresh}
                onRefresh={handleRefresh}
                renderItem={({ item }) => (
                    <PatientContainer>
                        <InfoContainer>
                            <Title>{item.name}</Title>
                            <Title>{item.code}</Title>
                        </InfoContainer>
                        
                        <InfoContainer>
                            <Info>{item.age}</Info>
                            <Info>{item.city}</Info>
                            <Info>{item.state}</Info>
                            <Info>{formatDate(item.register)}</Info>
                        </InfoContainer>
                    </PatientContainer>
                )}
            />
        </Container>
    );
}

export default List;