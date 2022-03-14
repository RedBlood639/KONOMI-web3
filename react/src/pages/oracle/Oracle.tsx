// @Modules
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";

// @Components
import { Container, PageTitle, OracleCard } from "components/index";
import CardSkeleton from "components/OracleCard/CardSkeleton";

// @styles
import "./Oracle.scss";
import { OracleTitleSVG } from "components/Svg";
import { getData } from "store/card/actions";

const Oracle: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(-1);
  const cardData = useSelector((state: AppState) => state.CardData);

  useEffect(() => {
    setLoading(true);
    console.log(cardData);
    const getFetchData = async () => {
      const res = await dispatch(getData());
      if (res) {
        setLoading(false);
      }
    };
    getFetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (id: number) => {
    console.log(active, id);
    if (id === active) {
      setActive(-1);
    } else {
      setActive(id);
    }
  };

  return (
    <div className="section-wrapper">
      <Container>
        <div className="page-content">
          <PageTitle icon={<OracleTitleSVG />} label="" />
          <div className="oracle-card-grid">
            <div className="page-subtitle">My Subscription</div>
            {loading
              ? [0, 1, 2, 3, 4, 5, 6, 7].map((item: number, key: number) => (
                  <CardSkeleton key={key} />
                ))
              : cardData.data?.map((item: any, key: any) => (
                  <OracleCard
                    key={key}
                    data={item}
                    active={active}
                    onClick={handleClick}
                  />
                ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Oracle;
