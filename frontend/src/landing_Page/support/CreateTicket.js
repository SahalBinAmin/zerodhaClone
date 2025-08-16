import React from "react";
import "../nav.css";

function CreateTicket() {
  return (
    <div className="container border-bottom mb-5 ">
      <div className="row p-5 mt-5 ">
        <h1 className="text-center fs-4">
          To create a ticket, select a relevant topic
        </h1>
        <div className="col-4 p-5 mt-5 mb-5 ">
          <h1 className="text-center fs-4">
            <i class="fa-solid fa-circle-plus"></i>Account Opening
          </h1>
          <ul className="mt-5">
            <li>
              <a href="#" className="none">
                Resident individual
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Minor
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Non Resident Indian (NRI)
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Company, Partnership, HUF and LLP
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Glossary
              </a>
            </li>
          </ul>
        </div>

        <div className="col-4 p-5 mt-5 mb-5 ">
          <h1 className="text-center fs-4">
            <i class="fa-solid fa-file-invoice"></i>KYC & Verification
          </h1>
          <ul className="mt-5">
            <li>
              <a href="#" className="none">
                PAN Card Update
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Aadhaar Linking
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Address Proof Change
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Mobile & Email Update
              </a>
            </li>
            <li>
              <a href="#" className="none">
                KYC Status Check
              </a>
            </li>
          </ul>
        </div>

        <div className="col-4 p-5 mt-5 mb-5 ">
          <h1 className=" fs-4">
            <i class="fa-solid fa-sim-card"></i>Trading
          </h1>
          <ul className="mt-5">
            <li>
              <a href="#" className="none">
                Equity Trading
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Futures & Options
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Commodity Trading
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Currency Derivatives
              </a>
            </li>
            <li>
              <a href="#" className="none">
                IPO Application Guide
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/*  */}

      <div className="row p-5 mb-5 ">
        <div className="col-4 p-5  mb-5 ">
          <h1 className="text-center fs-4">
            <i class="fa-solid fa-rotate-left"></i> Management
          </h1>
          <ul className="mt-5">
            <li>
              <a href="#" className="none">
                Change Password
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Enable 2FA (Two-Factor Authentication)
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Deactivate Account
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Reactivate Account
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Update Nominee Details
              </a>
            </li>
          </ul>
        </div>

        <div className="col-4 p-5 mb-5 ">
          <h1 className="text-center fs-4">
            <i class="fa-solid fa-wrench"></i>Platform & Tools
          </h1>
          <ul className="mt-5">
            <li>
              <a href="#" className="none">
                Kite Web Overview
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Kite Mobile App Guide
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Charting Tools
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Order Types Explained
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Keyboard Shortcuts
              </a>
            </li>
          </ul>
        </div>

        <div className="col-4 p-5 mb-5 ">
          <h1 className=" fs-4">
            <i class="fa-solid fa-eye"></i>Reports
          </h1>
          <ul className="mt-5">
            <li>
              <a href="#" className="none">
                Contract Notes
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Tax P&L Reports
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Ledger Statement
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Portfolio Holdings
              </a>
            </li>
            <li>
              <a href="#" className="none">
                Download Trade History
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
