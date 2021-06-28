import { CProgress } from "@coreui/react";

const SchoolRanking = () => {
  // render
  return (
    <table className="table table-hover table-outline mb-0 d-none d-sm-table">
      <thead className="thead-light">
        <tr>
          <th>Aluno</th>
          <th className="text-center">Turma</th>
          <th>Precisão</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div>Luan Dantas</div>
            <div className="small text-muted">
              <span>New</span> | Registered: Jan 1, 2015
            </div>
          </td>
          <td className="text-center">
            <div>
              <b>2ª A</b>
            </div>
          </td>
          <td>
            <div className="clearfix">
              <div className="float-left">
                <strong>50%</strong>
              </div>
              <div className="float-right">
                <small className="text-muted">
                  Jun 11, 2015 - Jul 10, 2015
                </small>
              </div>
            </div>
            <CProgress className="progress-xs" color="success" value="50" />
          </td>
        </tr>
        <tr>
          <td>
            <div>Vincius Lippi</div>
            <div className="small text-muted">
              <span>Recurring</span> | Registered: Jan 1, 2015
            </div>
          </td>
          <td className="text-center">
            <div>
              <b>1ª A</b>
            </div>
          </td>
          <td>
            <div className="clearfix">
              <div className="float-left">
                <strong>10%</strong>
              </div>
              <div className="float-right">
                <small className="text-muted">
                  Jun 11, 2015 - Jul 10, 2015
                </small>
              </div>
            </div>
            <CProgress className="progress-xs" color="info" value="10" />
          </td>
        </tr>
        <tr>
          <td>
            <div>Eduardo Cunha</div>
            <div className="small text-muted">
              <span>New</span> | Registered: Jan 1, 2015
            </div>
          </td>
          <td className="text-center">
            <div>
              <b>1ª B</b>
            </div>
          </td>
          <td>
            <div className="clearfix">
              <div className="float-left">
                <strong>74%</strong>
              </div>
              <div className="float-right">
                <small className="text-muted">
                  Jun 11, 2015 - Jul 10, 2015
                </small>
              </div>
            </div>
            <CProgress className="progress-xs" color="warning" value="74" />
          </td>
        </tr>
        <tr>
          <td>
            <div>Aline Rodrigues</div>
            <div className="small text-muted">
              <span>New</span> | Registered: Jan 1, 2015
            </div>
          </td>
          <td className="text-center">
            <div>
              <b>2ª B</b>
            </div>
          </td>
          <td>
            <div className="clearfix">
              <div className="float-left">
                <strong>98%</strong>
              </div>
              <div className="float-right">
                <small className="text-muted">
                  Jun 11, 2015 - Jul 10, 2015
                </small>
              </div>
            </div>
            <CProgress className="progress-xs" color="danger" value="98" />
          </td>
        </tr>
        <tr>
          <td>
            <div>Laura Penha</div>
            <div className="small text-muted">
              <span>New</span> | Registered: Jan 1, 2015
            </div>
          </td>
          <td className="text-center">
            <div>
              <b>2ª A</b>
            </div>
          </td>
          <td>
            <div className="clearfix">
              <div className="float-left">
                <strong>22%</strong>
              </div>
              <div className="float-right">
                <small className="text-muted">
                  Jun 11, 2015 - Jul 10, 2015
                </small>
              </div>
            </div>
            <CProgress className="progress-xs" color="info" value="22" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SchoolRanking;
