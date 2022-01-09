import React from 'react';

export default function addNewUser() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" ref={e => this.element = e} />
        </label> <br></br>
        <input type="submit" value="Pocetno stanje" />
      </form>
      <p>{ this.state.value }</p>
   </div>
  );
}
