"use client";

import Card from "@/components/Card";
import {collectionDetails} from "@/lib/dummyData";
import styled from "styled-components";

export default function CollectionSeries() {
  const tmpData = collectionDetails[0];
  return (
    <CollectionSeriesContainer>
      <CollectionDescriptionWrapper>
        <CollectionDescriptionSection1>
          <Title>{tmpData.title}</Title>
          <CollectionSeriesStatusWrapper>
            <CollectionSeriesStatus>
              <Status>{tmpData.good}</Status>
              <Status>{tmpData.commentCnt}</Status>
              <Status>viewed</Status>
            </CollectionSeriesStatus>

            <Status>{tmpData.name}</Status>
          </CollectionSeriesStatusWrapper>
        </CollectionDescriptionSection1>
        <hr
          style={{
            border: "none",
            borderTop: "1px solid #e9e7e7",
          }}
        />
        <CollectionDescriptionSection2>{tmpData.description}</CollectionDescriptionSection2>
      </CollectionDescriptionWrapper>
      <CollectionCardWrapper>
        <CardTitle>
          <Title>작품들</Title>
          <Cnt>{tmpData.cnt}</Cnt>
        </CardTitle>
        <hr
          style={{
            border: "none",
            borderTop: "1px solid #e9e7e7",
          }}
        />
        <Card collection={true} />
      </CollectionCardWrapper>
    </CollectionSeriesContainer>
  );
}

const CollectionSeriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
`;

const CollectionDescriptionWrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
`;

const CollectionDescriptionSection1 = styled.section`
  display: flex;
  flex-direction: column;
  padding: 28px;
  gap: 5px;
`;

const CollectionSeriesStatusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CollectionSeriesStatus = styled.div`
  display: flex;
  gap: 10px;
`;

const Title = styled.h4`
  font-size: 20px;
  color: #1f1f1f;
  font-weight: 500;
`;

const Status = styled.p`
  font-size: 13px;
  color: #6c757d;
`;

const CollectionDescriptionSection2 = styled.section`
  padding: 28px;
  white-space: pre-line;
  font-size: 14px;
  color: #777777;
`;

const CardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 28px 28px 8px 28px;
`;

const Cnt = styled.p`
  font-size: 15px;
  color: #1f1f1f;
`;

const CollectionCardWrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  gap: 20px;
`;
