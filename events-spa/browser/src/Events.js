// Credit to Nat Tuck's lecture notes:
// https://github.com/NatTuck/scratch-2021-01/blob/master/notes-4550/16-spa/notes.md

import { Row, Col, Form, Button } from 'react-bootstrap';
import capitalize from 'lodash/capitalize';
import { connect } from 'react-redux';

function Field({event, setEvent, field}) {
  function update(ev) {
    let tmp = Object.assign({}, event);
    tmp[field] = ev.target.value;
    setEvent(tmp);
  }

  return (
    <Form.Group>
      <Form.Label>{capitalize(field)}</Form.Label>
      <Form.Control type="text" onChange={update} value={event[field]||""} />
    </Form.Group>
  );
}

function EventForm({event, setEvent}) {
  function onSubmit(ev) {
    ev.preventDefault();
    console.log(ev);
    console.log(event);
  }

  return (
    <Form onSubmit={onSubmit}>
      <Field event={event} setEvent={setEvent} field="name" />
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
}

function Events({events, event_form, dispatch}) {
 function setEvent(event) {
     dispatch({type: 'event_form/set', data: event});
 }

  let rows = events.map((event) => (
    <tr key={event.id}>
      <td>{event.name}</td>
      <td>{event.date}</td>
      <td>
        <Button variant="secondary"
                onClick={() => setEvent(event)}>
          Edit
        </Button>
      </td>
    </tr>
  ));

  return (
    <div>
      <Row>
        <Col>
          <h2>Events</h2>
          <p>
            <Button variant="primary"
                    onClick={() => setEvent({})}>
              New Event
            </Button>
          </p>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { rows }
            </tbody>
          </table>
        </Col>
      </Row>
 
    </div>
  );
}

export default connect(({events, event_form}) => ({events, event_form}))(Events);