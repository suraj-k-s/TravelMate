import "./WidgetLg.css"

export default function WidgetLg() {
  const Button = ({type}) =>{
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className="widgetlg">
        <h3 className="widgetLgTitle">Latest Bookings</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">User</th>
            <th className="widgetLgTh">Packager</th>
            <th className="widgetLgTh">Package</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <span className="widgetLgName">Mikhael</span>
                </td>
                <td className="widgetLgPackager">
                <span className="widgetLgPkgrName">Oneness Travels</span>
                  </td>
                <td className="widgetLgPackage">
                <span className="widgetLgPkgName">Wayanad</span>
                  </td>
                  <td className="widgetLgDate">22 April 2022</td>
                  <td className="widgetLgStatus"><Button type="Approved"/></td>
              </tr>
              <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <span className="widgetLgName">Naveen</span>
                </td>
                <td className="widgetLgPackager">
                <span className="widgetLgPkgrName">Oneness Travels</span>
                  </td>
                <td className="widgetLgPackage">
                <span className="widgetLgPkgName">Goa</span>
                  </td>
                  <td className="widgetLgDate">24 April 2022</td>
                  <td className="widgetLgStatus"><Button type="Declined"/></td>
              </tr>
              <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <span className="widgetLgName">Rahul</span>
                </td>
                <td className="widgetLgPackager">
                <span className="widgetLgPkgrName">JaiGuru Holidays</span>
                  </td>
                <td className="widgetLgPackage">
                <span className="widgetLgPkgName">Coorg</span>
                  </td>
                  <td className="widgetLgDate">27 April 2022</td>
                  <td className="widgetLgStatus"><Button type="Pending"/></td>
              </tr>
              <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <span className="widgetLgName">Nabeel</span>
                </td>
                <td className="widgetLgPackager">
                <span className="widgetLgPkgrName">London TravelLights</span>
                  </td>
                <td className="widgetLgPackage">
                <span className="widgetLgPkgName">Munnar</span>
                  </td>
                  <td className="widgetLgDate">01 May 2022</td>
                  <td className="widgetLgStatus"><Button type="Approved"/></td>
              </tr>
              <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <span className="widgetLgName">Rony</span>
                </td>
                <td className="widgetLgPackager">
                <span className="widgetLgPkgrName">Komban Holidays</span>
                  </td>
                <td className="widgetLgPackage">
                <span className="widgetLgPkgName">Goa</span>
                  </td>
                  <td className="widgetLgDate">05 May 2022</td>
                  <td className="widgetLgStatus"><Button type="Pending"/></td>
              </tr>
          </table>
        </div>
  )
}
