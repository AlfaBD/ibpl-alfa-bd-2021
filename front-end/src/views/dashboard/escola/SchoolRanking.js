import { CProgress } from "@coreui/react";
import CIcon from "@coreui/icons-react";

const SchoolRanking = () => {
  // render
  return (
    <table className="table table-hover table-outline mb-0 d-none d-sm-table">
      <thead className="thead-light">
        <tr>
          <th className="text-center">
            <CIcon name="cil-people" />
          </th>
          <th>Aluno</th>
          <th className="text-center">Turma</th>
          <th>Precisão</th>
          <th className="text-center">Velocidade</th>
          <th>Prosódia</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-center">
            <div className="c-avatar">
              <img
                src={"avatars/1.jpg"}
                className="c-avatar-img"
                alt="admin@bootstrapmaster.com"
              />
              <span className="c-avatar-status bg-success"></span>
            </div>
          </td>
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
          <td className="text-center">
            <div>
              <b>60 P/M</b>
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
          <td className="text-center">
            <div className="c-avatar">
              <img
                src={"avatars/2.jpg"}
                className="c-avatar-img"
                alt="admin@bootstrapmaster.com"
              />
              <span className="c-avatar-status bg-danger"></span>
            </div>
          </td>
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
          <td className="text-center">
            <div>
              <b>59 P/M</b>
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
          <td className="text-center">
            <div className="c-avatar">
              <img
                src={"avatars/3.jpg"}
                className="c-avatar-img"
                alt="admin@bootstrapmaster.com"
              />
              <span className="c-avatar-status bg-warning"></span>
            </div>
          </td>
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
          <td className="text-center">
            <div>
              <b>59 P/M</b>
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
          <td className="text-center">
            <div className="c-avatar">
              <img
                src={"avatars/4.jpg"}
                className="c-avatar-img"
                alt="admin@bootstrapmaster.com"
              />
              <span className="c-avatar-status bg-secondary"></span>
            </div>
          </td>
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
          <td className="text-center">
            <div>
              <b>60 P/M</b>
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
          <td className="text-center">
            <div className="c-avatar">
              <img
                src={"avatars/5.jpg"}
                className="c-avatar-img"
                alt="admin@bootstrapmaster.com"
              />
              <span className="c-avatar-status bg-success"></span>
            </div>
          </td>
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
          <td className="text-center">
            <div>
              <b>57 P/M</b>
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
