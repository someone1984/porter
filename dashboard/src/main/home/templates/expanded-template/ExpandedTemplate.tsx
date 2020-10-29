import React, { Component } from 'react';
import styled from 'styled-components';
import launch from '../../../../assets/launch.svg';
import Markdown from 'markdown-to-jsx';

import { PorterChart } from '../../../../shared/types';

type PropsType = {
  currentChart: PorterChart,
  setCurrentChart: (x: PorterChart) => void
};

type StateType = {
};

export default class ExpandedTemplate extends Component<PropsType, StateType> {
  state = {
  }

  renderIcon = (icon: string) => {
    if (icon) {
      return <Icon src={icon} />
    }

    return (
      <Polymer><i className="material-icons">layers</i></Polymer>
    );
  }

  renderTagList = () => {
    return this.props.currentChart.Form.Tags.map((tag: string, i: number) => {
      return (
        <Tag key={i}>{tag}</Tag>
      )
    });
  }

  renderMarkdown = () => {
    let { currentChart } = this.props;
    if (currentChart.Markdown) {
      return (
        <Markdown>{currentChart.Markdown}</Markdown>
      );
    } else if (currentChart.Form.Description) {
      return currentChart.Form.Description;
    }

    return currentChart.Description;
  }

  render() {
    let { Name, Icon, Description } = this.props.currentChart.Form;
    let { currentChart } = this.props;

    return (
      <StyledExpandedTemplate>
        <TitleSection>
          <Flex>
            <i className="material-icons" onClick={() => this.props.setCurrentChart(null)}>
              keyboard_backspace
            </i>
            {Icon ? this.renderIcon(Icon) : this.renderIcon(currentChart.Icon)}
            <Title>{Name ? Name : currentChart.Name}</Title>
          </Flex>
          <Button>
            <img src={launch} />
            Launch Template
          </Button>
        </TitleSection>
        <TagSection>
          <i className="material-icons">local_offer</i>
          {this.renderTagList()}
        </TagSection>
        <ContentSection>
          {this.renderMarkdown()}
        </ContentSection>
      </StyledExpandedTemplate>
    );
  }
}

const ContentSection = styled.div`
  margin-top: 40px;
  font-size: 14px;
  line-height: 1.8em;
  padding-bottom: 100px;
`;

const Tag = styled.div`
  border: 1px solid #ffffff44;
  border-radius: 3px;
  display: flex;
  margin-right: 7px;
  align-items: center;
  padding: 5px 10px;
`;

const TagSection = styled.div`
  margin-top: 20px;
  display: flex;
  font-size: 13px;
  font-family: 'Work Sans', sans-serif;
  align-items: center;

  > i {
    font-size: 20px;
    margin-right: 10px;
    color: #aaaabb;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;

  > i {
    cursor: pointer;
    font-size 24px;
    color: #969Fbbaa;
    padding: 3px;
    border-radius: 100px;
    :hover {
      background: #ffffff11;
    }
  }
`;

const Button = styled.div`
  height: 100%;
  background: #616FEEcc;
  :hover {
    background: #505edddd;
  }
  color: white;
  font-weight: 500;
  font-size: 13px;
  padding: 10px 15px;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0 5px 8px 0px #00000010;
  display: flex;
  flex-direction: row;
  align-items: center;

  > img {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    margin-right: 10px;
    justify-content: center;
  }
`;

const Icon = styled.img`
  width: 27px;
  margin-left: 14px;
  margin-right: 4px;
  margin-bottom: -1px;
`;


const Polymer = styled.div`
  margin-bottom: -3px;

  > i {
    color: ${props => props.theme.containerIcon};
    font-size: 24px;
    margin-left: 12px;
    margin-right: 3px;
  }
`;

const Description = styled.div`
  font-size: 14px;
  font-family: 'Work Sans', sans-serif;
  margin-left: 30px;
  width: calc(100% - 60px);
  height: 4em;
  border-radius: 2px;
  color: #aaaabb;
  padding: 5px 10px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  font-family: 'Work Sans', sans-serif;
  margin-left: 10px;
  border-radius: 2px;
  color: #ffffff;
`;

const TitleSection = styled.div`
  display: flex;
  margin-left: -42px;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% + 42px);
  align-items: center;
`;

const StyledExpandedTemplate = styled.div`
  width: calc(90% - 70px);
  padding-top: 20px;
`;