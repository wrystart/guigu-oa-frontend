import request from '@/utils/request'

const api_name =  '/admin/system/sysRole'

export default {
  //角色列表-条件分页查询
  getPageList(current,limit,searchObj){
    return request({
      url: `${api_name}/${current}/${limit}`,
      method: 'get',
      //如果是普通对象参数写法 params:对象参数名称
      //如果使用json格式传递 data:对象参数名称
      params: searchObj
    })
  },
  //角色批量删除
  batchRemove(idList){
    return request({
      url: `${api_name}/batchRemove`,
      method: 'delete',
      data: idList
    })
  },

  //角色删除
  removeById(id){
    return request({
      url: `${api_name}/remove/${id}`,
      method: 'delete'
    })
  },

  //角色添加
  saveRole(role){
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: role
    })
  },

  //角色修改-根据id查询
  getById(id){
    return request({
      url: `${api_name}/get/${id}`,
      method: 'get',
    })
  },
  //角色修改-最终修改
  updateById(role){
    return request({
      url: `${api_name}/update`,
      method: 'put',
      data: role
    })
  },
  //获取所有角色 + 用户所属角色
  getRoles(adminId) {
    return request({
      url: `${api_name}/toAssign/${adminId}`,
      method: 'get'
    })
  },
  //用户分配角色
  assignRoles(assginRoleVo) {
    return request({
      url: `${api_name}/doAssign`,
      method: 'post',
      data: assginRoleVo
    })
  }
}
