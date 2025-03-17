import React, { useState } from "react";

export default function NctForm({ onNctAddNew }) {
  const [id, setNctID] = useState("");
  const [NctName, setNctName] = useState("");
  const [NctUserName, setNctUser] = useState("");
  const [NctPass, setNctPass] = useState("");
  const nctHandleSubmit = (event) => {
    event.preventDefault();
    onNctAddNew({ id, NctName, NctUserName, NctPass });
  };
  return (
    <div>
      <form>
        <p>
          Ma Sinh Vien:
          <input
            type="text"
            name="nctID"
            onChange={(ev) => setNctID(ev.target.value)}
            value={id}
          />
        </p>
        <p>
          Ten Sinh Vien:
          <input
            type="text"
            name="nctName"
            onChange={(ev) => setNctName(ev.target.value)}
            value={NctName}
          />
        </p>
        <p>
          Tai Khoan:
          <input
            type="text"
            name="nctUser"
            onChange={(ev) => setNctUser(ev.target.value)}
            value={NctUserName}
          />
        </p>
        <p>
          Mat Khau:
          <input
            type="password"
            name="nctPass"
            onChange={(ev) => setNctPass(ev.target.value)}
            value={NctPass}
          />
        </p>
        <p>
          <button type="submit" name="nctSave" onClick={nctHandleSubmit}>
            Save
          </button>
        </p>
      </form>
    </div>
  );
}
