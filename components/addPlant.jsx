import React from "react";
import Link from "next/link";

export default props => (
  <Link href={`/new-plant`}>
    <button id={props.id}>
      Add new plant
      <style>{`
        button {
            width: 40%;
            border: none;
            color: white;
            padding: 12px;
            margin: 0 auto;
            margin-top: 3em;
            font-size: 12pt;
            border-radius: 10px;
            background: #77E681;
        }
    `}</style>
    </button>
  </Link>
);
