import styled from "styled-components";

export const HeaderColor = styled.div`
    background-color: #f7ebfd;
    padding: 30px;
    text-align: center;
    width: 100%;
`;

export const Title = styled.h1 `
    color: #3c096c;
    font-family: "sans-serif";
    font-size: 80px;
`;

export const Description = styled.h4 `
    color:#7b2cbf;
    font-family: "sans-serif";
    font-size: 30px;
    font-variant: small-caps;
`;

export const TimelineContainer = styled.div `
    display: flex; 
    flex-direction: column;
    position: relative;
    margin: 80px auto;
    width: 50%;
    font-family: "sans-serif";
    font-size: 18px;
    color: #3c096c;
    font-weight: bold;
    
        div:nth-child(even) {
            display: flex;
            flex-direction: column;
            align-self: flex-end;
            justify-items: center;
            align-items: flex-start;
            margin: 40px -20px;
        }
`;

export const TimelineItem = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-right: 30px;
    position: relative;
    margin: 10px 0;
    width: 100%; 

        &:after {
            background-color: #10002b;
            content: '';
            position: absolute;
            right: calc(50% - 1px);
            width: 2px;
            height: 100%;   
        }
`;

export const TimelineItemContent = styled.div `
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    position: relative;
    width: 400px;
    max-width: 70%;
    text-align: left;
    background-color: #f7ebfd;
    
    &:after {
            content: ' ';
            background-color: #f7ebfd;
            position: absolute;
            border-radius: 50%;
            right: -7.5px;
            top: calc(50% - 7.5px);
            transform: rotate(45deg);
            border: 2px solid #10002b;
            right: -73px;
            width: 20px;
            height: 20px;
            z-index: 100;
        }

        div:nth-child(even)&:after {
            content: ' ';
            background-color: #f7ebfd;
            position: absolute;
            left: -7.5px;
            top: calc(50% - 7.5px);
            transform: rotate(45deg);
            border: 2px solid #10002b;
            left: -62px;
            width: 20px;
            height: 20px;
        }
`;


