import React from 'react';
import PropTypes from 'prop-types';

import walkShape from '../../helpers/propz/walkShape';
import Walk from '../Walk/Walk';
import WalkForm from '../WalkForm/WalkForm';

import employeeShape from '../../helpers/propz/employeeShape';

import dogShape from '../../helpers/propz/dogShape';

class Walks extends React.Component {
  static propTypes = {
    walks: PropTypes.arrayOf(walkShape.walkShape),
    employees: PropTypes.arrayOf(employeeShape.employeeShape),
    dogs: PropTypes.arrayOf(dogShape.dogShape),
    addWalks: PropTypes.func,
    deleteSingleWalk: PropTypes.func,
    walkToEdit: PropTypes.array,
    editMode: PropTypes.bool,
    showWalkForm: PropTypes.bool,
    updateWalk: PropTypes.func,
    setEditMode: PropTypes.func,
    setWalkToEdit: PropTypes.func,
    setShowWalkForm: PropTypes.func,
  }

  render() {
    const {
      walks,
      dogs,
      employees,
      addWalks,
      deleteSingleWalk,
      walkToEdit,
      editMode,
      showWalkForm,
      updateWalk,
      setEditMode,
      setWalkToEdit,
    } = this.props;
    const walkCards = walks.map((walk) => <Walk key={walk.id} walk={walk} deleteSingleWalk={deleteSingleWalk} setEditMode={setEditMode} setWalkToEdit={setWalkToEdit} />);
    return (
      <div>
        <div>
          <button onClick={this.setShowWalkForm}>Add New Walk</button>
          {
            showWalkForm && <WalkForm addWalks={addWalks} dogs={dogs} employees={employees} editMode={editMode} walkToEdit={walkToEdit} updateWalk={updateWalk} />
          }
        </div>
        <div className="container">
          <div className="row">
            {walkCards}
          </div>
        </div>
      </div>
    );
  }
}

export default Walks;
