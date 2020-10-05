export const formatDate = (date: Date) : string => {
    const toDate = new Date(date);

    return toDate.toLocaleDateString('pt-BR');
};