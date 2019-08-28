import MaterialIcon from '@material/react-material-icon';
import {Cell, Grid, Row} from '@material/react-layout-grid';
import { Headline4, Body1, Body2 } from '@material/react-typography';
import Fab from '@material/react-fab'
import Button from '@material/react-button';
import List, {ListItem, ListItemText, ListItemGraphic, ListItemMeta} from '@material/react-list';
import TextField, {Input} from '@material/react-text-field';

import CommentBox from '../components/CommentBox';

import "../styles/main.scss"

const QuinnAvi = props => (
  <img src="static/quinn-avi.png" alt="avatar"/>
);

const EbenAvi = props => (
  <img src="static/eben-avi.jpeg" alt="avatar"/>
);

class AnswerQuestionFields extends React.Component {
  state = {
    questionNumber: '9',
    questionValue: 'Does the middle dot on “Ŀ” align with  the center bar of “R”?',
    descriptionValue: 'Certe, inquam, pertinax non numquam eius modi tempora incidunt, ut ita ruant itaque turbent, ut de voluptate ponit.',
  };

  render() {
    return (
      <div>
        <Grid>
          <Row className="answer-question-fields">
            <Cell desktopColumns={2}></Cell>
            <Cell columns={8}>
              <Body1 className="question-number">Question #{this.state.questionNumber}</Body1>
              <Headline4 tag="h1" className="question">{this.state.questionValue}</Headline4>
              <Body1>{this.state.descriptionValue}</Body1>
            </Cell>
          </Row>
        </Grid>
        <div className="answer-question-images-comments">
          <div>
            <div className="question-image-wrapper">
              <img className="question-image" src="static/type-example.png" alt=""/>
              <Fab className="question-image-fab" icon={<MaterialIcon icon="fullscreen"/>}/>
            </div>
          </div>
          <div className="answer-comments-wrapper">
            <Body1 className="your-answer">Your answer</Body1>
            <Button className="yes" outlined>Yes</Button>
            <Button className="no" outlined>No</Button>
            <Button className="next" raised icon={<MaterialIcon icon="arrow_forward"/>}>Next Question</Button>
            <CommentBox size="small"/>
          </div>
        </div>
        {/*
        <div className="lightbox">
          <img className="lightbox-image" src="static/type-example.png" alt=""/>
        </div>
        */}
      </div>

    );
  }
}

export default AnswerQuestionFields;