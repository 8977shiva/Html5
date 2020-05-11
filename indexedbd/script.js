if (!window.indexedDB) {
  console.log(
    "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."
  );
} else {
  let db = null;
  const btnCreateDB = document.getElementById("btnCreateDB");
  const btnAddNote = document.getElementById("btnAddNote");

  btnCreateDB.addEventListener("click", createDB);
  btnAddNote.addEventListener("click", addNote);

    function addNote() {

      const note = {
          title: "note" + Math.random(),
          text: "This is my note"
      }

      const tx = db.transaction("personal_notes", "readwrite")
      const pNotes = tx.objectStore("personal_notes")
      pNotes.add(note)
  }

  function createDB() {
    const dbName = document.getElementById("txtDB").value;
    const dbVersion = document.getElementById("txtVersion").value;

    const request = indexedDB.open(dbName, dbVersion);

    //on upgrade needed
    request.onupgradeneeded = (e) => {
      db = e.target.result;

      const pNotes = db.createObjectStore("personal_notes", {
        keyPath: "title",
      });

      alert(
        `upgrade is called database name: ${db.name} version : ${db.version}`
      );
    };
    //on success
    request.onsuccess = (e) => {
      db = e.target.result;
      alert(
        `success is called database name: ${db.name} version : ${db.version}`
      );
    };
    //on error
    request.onerror = (e) => {
      alert(`error: ${e.target.error} was found `);
    };
  }
}
